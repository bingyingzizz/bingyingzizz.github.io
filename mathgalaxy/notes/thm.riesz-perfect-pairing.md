# Riesz 表示的配对版　`thm.riesz-perfect-pairing`　·　说明
根 `../`

**证明 (a)**：由定范条件，$\|x\| = \sup_{\|y\| \le 1}|\langle x, y\rangle| = \|T x\|$，其中 $T x := \langle x, \cdot\rangle$；由非退化 $T$ 单射，故 $T$ 是等距嵌入。对 $y$ 同理。$\blacksquare$

**证明 (b)**：设 $T$ 满射且 $Y$ 自反。$T$ 是等距同构 $X \to Y^*$，故 $T^{*} : Y^{**} \to X^{*}$ 是等距同构；又 $S = T^{*} \circ J_Y$（验证：$T^{*} J_Y y (x) = J_Y y(T x) = \langle x, y\rangle = S y(x)$）。$Y$ 自反即 $J_Y$ 是满射（等距同构），故 $S = T^{*} \circ J_Y$ 是满射。对称情形对偶化即可。$\blacksquare$

> 续见 notes/thm.riesz-perfect-pairing.2.md
