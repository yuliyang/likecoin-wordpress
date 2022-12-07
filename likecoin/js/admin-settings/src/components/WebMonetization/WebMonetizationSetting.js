import {
  useRef, useState, useEffect, useImperativeHandle, forwardRef,
} from 'react';
import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import CheckBox from '../CheckBox';
import Section from '../Section';
import WebMonetizationDescription from './WebMonetizationDescription';
import { OTHER_SETTING_STORE_NAME } from '../../store/other-setting-store';

function WebMonetizationSetting(_, ref) {
  const DBPaymentPointer = useSelect((select) => select(OTHER_SETTING_STORE_NAME)
    .selectPaymentPointer());
  const { postPaymentPointer } = useDispatch(OTHER_SETTING_STORE_NAME);
  const [showWebMonetization, setShowWebMonetization] = useState(!!DBPaymentPointer);
  useEffect(() => { setShowWebMonetization(!!DBPaymentPointer); }, [DBPaymentPointer]);
  const paymentPointerRef = useRef();
  async function confirmHandler() {
    if (!showWebMonetization) return;
    try {
      postPaymentPointer(paymentPointerRef.current.value); // change global state & DB
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }
  }
  useImperativeHandle(ref, () => ({
    submit: confirmHandler,
  }));
  return (
      <>
      <Section title={__('Web Monetization', 'likecoin')} />
      <WebMonetizationDescription />
      <CheckBox
        checked={showWebMonetization}
        handleCheck={setShowWebMonetization}
        title={__('Web Monetization', 'likecoin')}
        details={__('Enable settings', 'likecoin')} />
      {showWebMonetization && (
        <><table className="form-table" role="presentation">
            <tbody>
              <tr>
                <th scope="row">
                  <label for="site_payment_pointer">
                    {__('Payment pointer', 'likecoin')}
                  </label>
                </th>
                <td>
                  <input
                    type="text"
                    placeholder="$wallet.example.com/alice"
                    defaultValue={DBPaymentPointer}
                    ref={paymentPointerRef}
                  ></input>{' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://webmonetization.org/docs/ilp-wallets/"
                  >
                    {__('What is payment pointer?', 'likecoin')}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

export default forwardRef(WebMonetizationSetting);
