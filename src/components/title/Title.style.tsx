import { styled } from 'styled-components';
import { Button, Badge } from 'antd';

export const WrapperStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

`;

export const TitleStyled = styled.div`
	& > div {
		display: inline-block !important;
		text-overflow: ellipsis;
		white-space: nowrap;
	  	overflow: hidden;
		font-size: 16px;
	};
`;

export const ButtonStyled: typeof Button = styled(Button)`
    transition: all 0.3s;
	& .ant-badge {
		color: inherit;
	};
	&.ant-btn-icon-only {
		width: 20px;
	};
	&.ant-btn-icon-only .anticon {
    	font-size: 12px;
	};
`;

export const BadgeStyled: typeof Badge = styled(Badge)`
	& .ant-badge-count {
		background: transparent;
		box-shadow: none;
		color: var(--color-error);
		font-weight: bold;
	}
`;
