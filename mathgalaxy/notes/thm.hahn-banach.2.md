# Hahn–Banach 定理　`thm.hahn-banach`　·　说明
根 `../`

**第二步：Zorn。** 考虑所有「$g$ 定义在子空间 $N \supseteq M$ 上、线性、$g|_M = f$、$g \le p$ 于 $N$」的对象，按「延拓」排序（$g_1 \preceq g_2$ 当 $g_2$ 的定义域更大且在 $g_1$ 上等于 $g_1$）。全序子族的并仍是这种对象（定义域取并、线性与 $\le p$ 逐点验证），由 `lem.zorn` 得极大元 $F$。若 $\operatorname{dom} F \ne X$，取 $x_0 \notin \operatorname{dom} F$ 用第一步再延拓，与极大性矛盾。故 $F$ 定义在整个 $X$ 上。$\blacksquare$

**第三步：保范延拓。** 取 $p(x) = \|\varphi\| \cdot \|x\|$（次线性），$f = \varphi$，则 $\varphi \le p$ 于 $M$。得线性 $\Phi$ 使 $\Phi|_M = \varphi$、$\Phi \le p$ 于 $X$。对 $x$ 与 $-x$ 分别用 $\Phi \le p$ 得 $|\Phi(x)| \le \|\varphi\|\,\|x\|$，故 $\|\Phi\| \le \|\varphi\|$；反向由延拓给出，故相等。$\blacksquare$

**复空间的情形**：把 $\varphi$ 看成实线性泛函，延拓后令 $\Phi_{\mathbb C}(x) = \Psi(x) - i\,\Psi(ix)$，可验证它复线性且保范。

> 续见 notes/thm.hahn-banach.3.md
