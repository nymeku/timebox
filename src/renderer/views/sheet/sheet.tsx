import BrainDump from 'renderer/components/brain-dump/brain-dump';
import TopPrio from 'renderer/components/top-prio/top-prio';
import Logo from '../../components/Logo/logo';
import './sheet.scss';
export default function Sheet() {
  return (
    <div className="Layout">
      <div className="LeftContainer">
        <div style={{ marginBottom: '35px' }}>
          <Logo />
        </div>
        <div style={{ marginBottom: '35px' }}>
          <TopPrio />
        </div>

        <BrainDump />
      </div>

      <div className="RightContainer"></div>
    </div>
  );
}
