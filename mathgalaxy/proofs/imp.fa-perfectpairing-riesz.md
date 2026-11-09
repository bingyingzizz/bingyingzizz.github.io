# 完美配对 $\implies$ 两个 Riesz 嵌入与互满准则
`imp.fa-perfectpairing-riesz` · 推出 · strong 边 · 根 `../`

`def.perfect-pairing` 完美配对 → `thm.riesz-perfect-pairing` Riesz 表示的配对版

设 $(X, Y, \langle\cdot,\cdot\rangle)$ 是完美配对。

**(a)** 令 $T x = \langle x, \cdot\rangle \in Y^*$。由定义第三条，$\|x\| = \sup_{\|y\| \le 1}|\langle x, y\rangle| = \|T x\|$；由第一条，$T x = 0 \implies x = 0$。故 $T$ 是等距嵌入。对 $S y = \langle\cdot, y\rangle \in X^*$ 同理。

**(b)** 若 $T$ 满，则 $T$ 是等距同构 $X \to Y^*$。对偶化得 $T^* : Y^{**} \to X^*$ 等距同构；而 $S : Y \to X^*$ 是等距嵌入，且 $T^*$ 把 $J_Y(Y)$ 送到 $S(Y)$（验证：$T^* J_Y y (x) = J_Y y(T x) = \langle x, y\rangle = S y(x)$）。$J_Y$ 总是等距，故 $S(Y) = T^* J_Y(Y)$ 在 $T^*$ 下同构于 $Y$，而 $T^*$ 满（同构），所以 $S$ 也满。$\blacksquare$

> 续见 proofs/imp.fa-perfectpairing-riesz.2.md
