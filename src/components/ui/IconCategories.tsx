import {
  FaBasketballBall,
  FaDumbbell,
  FaSwimmer,
  FaTableTennis,
  FaVolleyballBall,
  FaSkiing
} from 'react-icons/fa';
import { GiRunningShoe, GiCycling, GiBoxingGlove, GiArcheryTarget, GiCanoe } from 'react-icons/gi';
import { MdOutlineSportsHandball, MdOutlineRowing, MdOutlineSailing } from 'react-icons/md';
import { IoMdFootball } from 'react-icons/io';
import { TbKarate } from 'react-icons/tb';

export const iconMapping: any = {
  ARCHERY: GiArcheryTarget,
  ATHLETICS: GiRunningShoe,
  BADMINTON: MdOutlineSportsHandball,
  BASKETBALL: FaBasketballBall,
  BOXING: GiBoxingGlove,
  CANOE_KAYAK: GiCanoe,
  CYCLING: GiCycling,
  DIVING: FaSwimmer,
  FENCING: FaTableTennis,
  FOOTBALL: IoMdFootball,
  GYMNASTICS: FaSkiing,
  HANDBALL: MdOutlineSportsHandball,
  ROWING: MdOutlineRowing,
  SAILING: MdOutlineSailing,
  SWIMMING: FaSwimmer,
  TABLE_TENNIS: FaTableTennis,
  TENNIS: FaTableTennis,
  VOLLEYBALL: FaVolleyballBall,
  WEIGHTLIFTING: FaDumbbell,
  KARATE: TbKarate
};
