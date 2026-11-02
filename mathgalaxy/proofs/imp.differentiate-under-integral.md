# DCT $\implies$ 在积分号下求极限与求导
`imp.differentiate-under-integral` · 推出 · strong 边 · 根 `../`

`thm.dct` 控制收敛定理 → `thm.differentiate-under-integral` 交换极限/导数与积分

**(a)** 取任意 $t_n \to t_0$，令 $f_n(x) = f(x, t_n)$。由题设 $|f_n| \le g \in L^1$、且 $f_n \to f(x,t_0)$ 逐点，DCT 直接给出

$$F(t_n) = \int f_n \to \int f(\cdot, t_0) = F(t_0)$$

对一切序列 $t_{n}$ 成立，故 $\lim_{t\to t_0} F(t) = F(t_0)$。

**(b)** 取任意 $t_n \to t_0$，令

$$h_n(x) = (f(x, t_n) - f(x, t_0)) / (t_n - t_0)$$

则 $F'(t_0) = \lim_n (F(t_n) - F(t_0)) / (t_n - t_0) = \lim_n \int h_n$。要把它换成 $\int \lim h_{n}$ 就够了，而 DCT 正好提供这个能力：

$\cdot$ $h_n \to \partial f / \partial t(x, t_0)$ 逐点（这是导数的定义）；
$\cdot$ **控制**：由中值定理，$|h_n(x)| \le \sup_{t \in [t_0, t_n]} | \partial f / \partial t(x, t) | \le g(x)$。

于是

> 续见 proofs/imp.differentiate-under-integral.2.md
