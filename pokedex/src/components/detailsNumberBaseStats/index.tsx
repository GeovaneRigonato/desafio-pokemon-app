import React from 'react';
import * as Styled from './styles';

interface DetailsNumberBaseStatsProps {
  hp: number;
  atk: number;
  def: number;
  spAtk: number;
  spDef: number;
  spd: number;
  color: string;
  widhtBarHp: number;
  widhtBarAtk: number;
  widhtBarDef: number;
  widhtBarSpAtk: number;
  widhtBarSpDef: number;
  widhtBarSpd: number;
}

export function DetailsNumberBaseStats( { hp,atk,def,spAtk,spDef,spd, color, widhtBarHp, widhtBarAtk, widhtBarDef, widhtBarSpAtk, widhtBarSpDef, widhtBarSpd }: DetailsNumberBaseStatsProps)  {
  
  const color1 = {color};
  const opacity = 0.2;
  const hexToRgba = (hex: string, opacity: number) => {
    const hexWithoutHash = hex.replace('#', '');
    const r = parseInt(hexWithoutHash.substr(0, 2), 16);
    const g = parseInt(hexWithoutHash.substr(2, 2), 16);
    const b = parseInt(hexWithoutHash.substr(4, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const hpValue = hp >= 100 ? String(hp) : `0${hp}`;
  const atkValue = atk >= 100 ? String(atk) : `0${atk}`;
  const defValue = def >= 100 ? String(def) : `0${def}`;
  const spAtkValue = spAtk >= 100 ? String(spAtk) : `0${spAtk}`;
  const spDefValue = spDef >= 100 ? String(spDef) : `0${spDef}`;
  const spdValue = spd >= 100 ? String(spd) : `0${spd}`;
  
  const colorWithOpacity = hexToRgba(color1.color, opacity);

  return (
    <>
      <Styled.BaseStatsContent>
        <Styled.BaseStatsNumber>{hpValue}</Styled.BaseStatsNumber>
        <Styled.ContainerProgressBar
          color={colorWithOpacity}
        >
        <Styled.ProgressBar width={widhtBarHp/2.55} color={color} />
        </Styled.ContainerProgressBar>
      </Styled.BaseStatsContent>

      <Styled.BaseStatsContent>
        <Styled.BaseStatsNumber>{`${atkValue}`}</Styled.BaseStatsNumber>
        <Styled.ContainerProgressBar
          color={colorWithOpacity}
        >
        <Styled.ProgressBar width={widhtBarAtk/1.90} color={color} />
        </Styled.ContainerProgressBar>
      </Styled.BaseStatsContent>

      <Styled.BaseStatsContent>
        <Styled.BaseStatsNumber>{`${defValue}`}</Styled.BaseStatsNumber>
        <Styled.ContainerProgressBar
          color={colorWithOpacity}
        >
        <Styled.ProgressBar width={widhtBarDef/2.30} color={color} />
        </Styled.ContainerProgressBar>
      </Styled.BaseStatsContent>
      
      <Styled.BaseStatsContent>
        <Styled.BaseStatsNumber>{`${spAtkValue}`}</Styled.BaseStatsNumber>
        <Styled.ContainerProgressBar
          color={colorWithOpacity}
        >
        <Styled.ProgressBar width={widhtBarSpAtk/1.94} color={color} />
        </Styled.ContainerProgressBar>
      </Styled.BaseStatsContent>

      <Styled.BaseStatsContent>
        <Styled.BaseStatsNumber>{`${spDefValue}`}</Styled.BaseStatsNumber>
        <Styled.ContainerProgressBar
          color={colorWithOpacity}
        >
        <Styled.ProgressBar width={widhtBarSpDef/2.30} color={color} />
        </Styled.ContainerProgressBar>
      </Styled.BaseStatsContent>
      
      <Styled.BaseStatsContent>
        <Styled.BaseStatsNumber>{`${spdValue}`}</Styled.BaseStatsNumber>
        <Styled.ContainerProgressBar
          color={colorWithOpacity}
        >
        <Styled.ProgressBar width={widhtBarSpd/1.80} color={color} />
        </Styled.ContainerProgressBar>
      </Styled.BaseStatsContent></>
  );
}
