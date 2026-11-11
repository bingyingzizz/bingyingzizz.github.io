# Goldstine 定理　`thm.goldstine`　·　说明
根 `../`

**主证明。** 设 $K = \overline{J_X(B_X)}^{w^{*}} \subseteq B_{X^{**}}$（闭凸紧）。若 $K \ne B_{X^{**}}$，取 $\xi_0 \in B_{X^{**}} \setminus K$。由分离引理，存在弱*连续线性泛函 $\ell$ 使 $\ell(\xi_0) > \sup_{K} \ell$。由准备，$\ell = \mathrm{ev}_x$（某 $x \in X$）。于是

$\xi_0(x) > \sup_{\eta \in K} \eta(x) \ge \sup_{y \in B_X} (J_X y)(x) = \sup_{y \in B_X} x(y) = \|x\|.$

但 $\xi_0 \in B_{X^{**}}$ 给出 $\xi_0(x) \le \|\xi_0\|\,\|x\| \le \|x\|$，矛盾。故 $K = B_{X^{**}}$，即 $J_X(B_X)$ 弱*稠密。$\blacksquare$

⚠ 稠密不等于闭：一般情况下 $J_X(B_X)$ 确实不是弱*闭的（它弱*闭当且仅当 $X$ 自反），这正是 `thm.milman-pettis` 要用的那一点。

📌 本条的几何分离引理只用到 `thm.hahn-banach`；两条合起来把「$X$ 自反」变成一个纯几何条件：$B_{X^{**}}$ 中每点都落在 $J_X(B_X)$ 的弱*闭包里。
