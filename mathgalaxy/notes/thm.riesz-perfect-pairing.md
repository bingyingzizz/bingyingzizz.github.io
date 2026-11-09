# Riesz 表示的配对版　`thm.riesz-perfect-pairing`　·　说明
根 `../`

**证明 (a)**：由定范条件，$\|x\| = \sup_{\|y\| \le 1}|\langle x, y\rangle| = \|T x\|$，其中 $T x := \langle x, \cdot\rangle$；由非退化 $T$ 单射，故 $T$ 是等距嵌入。对 $y$ 同理。$\blacksquare$

**证明 (b)**：若 $T : X \to Y^*$ 满射，则由等距性 $X \cong Y^*$。对偶化得 $X^* \cong Y^{**}$；把 (a) 用于 $Y$ 一侧得 $Y \hookrightarrow X^*$ 等距嵌入。要证满：任取 $\varphi \in X^*$，它在 $X \cong Y^*$ 下对应 $y_0 \in Y$（$\varphi(x) = \langle x, y_0\rangle$），这正是 $y \mapsto \langle\cdot, y\rangle$ 的像，故满。$\blacksquare$

**证明 (c)**：Hilbert 情形就是 `thm.riesz-hilbert`（每个连续线性泛函由内积给出）；$L^p$ 情形就是 `thm.riesz-representation-lp`（$(L^p)^* \cong L^q$）。两条定理的证明里，满射性分别来自投影定理与 Radon–Nikodym（或测度论版本），配对本身只提供有界与定范。

> 续见 notes/thm.riesz-perfect-pairing.2.md
