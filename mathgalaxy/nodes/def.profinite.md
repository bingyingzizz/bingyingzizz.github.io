# 投射有限空间　`def.profinite`
投射有限空间（Profinite Space）
layer 12 · 定义 · 紧 Haus 与 Stone · 拓扑学

**投射有限空间**是有限离散空间沿一个**有向**系统取极限得到的拓扑空间：

$$X \;=\; \varprojlim_{i \in I} X_{i}, \qquad X_{i} \text{ 有限离散},\quad I \text{ 有向}$$

## 为什么成立（入边，证明在 proofs/）
- `def.limit` 极限：用到了定义 极限　proofs/def-dep.limit-profinite.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.stone-profinite` Stone ⟺ 投射有限
- 被 `thm.stone-profinite` Stone ⟺ 投射有限 用

## 说明
「pro-finite」= 有限者的投射极限。直观上它是「越来越细的有限分辨率」堆出来的对象：$X_{i}$ 是第 $i$ 层分辨率下的样子，$I$ 有向保证任意两层分辨率都能同时加细。
