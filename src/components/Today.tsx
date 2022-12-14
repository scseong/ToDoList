import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import week from 'dayjs/plugin/weekOfYear';
import { DateContainer } from './styles';

dayjs.extend(week);

const Today = () => {
  const [day, week, month, year] = dayjs(new Date())
    .format('DD-ddd-MMM-YYYY')
    .split('-');

  return (
    <DateContainer>
      <div>
        <span>{day}</span>
      </div>
      <div>
        <span>{month}</span>
        <span>{year}</span>
        <span>{week}</span>
      </div>
    </DateContainer>
  );
};

export default Today;
