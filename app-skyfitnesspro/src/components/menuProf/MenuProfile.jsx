import * as S from './MenuProfile.styles';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../store/actions/creators';
import { exit } from '../../components/firebase/firebase';
import logo from '../../img/logo.svg'

export const MenuProfile = ({ isOpen, color, setUserData }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleExit = async () => {
		try {
			exit();
			dispatch(signOut());
			navigate('/auth');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<S.Dropdown>
			<NavLink to="/">
          		<S.HeaderLogo>
            		<img src={logo} alt="logo" />
          		</S.HeaderLogo>
        	</NavLink>
			<S.DropdownContent className={isOpen ? 'open' : ''}>
				<NavLink to='/'>
					<S.EachDropdownContent $color={color}>
						На главную
					</S.EachDropdownContent>
				</NavLink>
				<NavLink to='/profile'>
					<S.EachDropdownContent $color={color}>Профиль</S.EachDropdownContent>
				</NavLink>

				<S.EachDropdownContent $color={color} onClick={() => {handleExit(); setUserData(null)}}>
					Выйти
				</S.EachDropdownContent>
			</S.DropdownContent>
		</S.Dropdown>
	);
};
