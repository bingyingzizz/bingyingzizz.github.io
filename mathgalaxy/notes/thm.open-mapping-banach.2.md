# 开映射定理（Banach 版）　`thm.open-mapping-banach`　·　说明
根 `../`

$$\overline{u(2k\, B_E)} \supseteq B_F(0, \delta/2) ,$$

再由齐次性（两边同时除以 $2k$）得到：存在 $r = \delta/(4k) > 0$ 使

$$\overline{u(B_E)} \supseteq 2r\, B_F .$$

**第二步：把闭包去掉。** 要证 $u(B_E) \supseteq r B_F$。取 $\|y\| < r$。由第一步，$\overline{u(B_E)} \supseteq 2r B_F$，故 $y \in \overline{u(B(0, 1/2))}$：存在 $x_1$，$\|x_1\| < 1/2$，使 $\|y - u(x_1)\| < r/2$。对 $y - u(x_1)$（范数 $< r/2 < r$）重复同一论证，得 $x_2$，$\|x_2\| < 1/4$，使 $\|y - u(x_1) - u(x_2)\| < r/4$。如此得到 $(x_n)$，满足

$$\|x_n\| < 2^{-n}, \qquad \Bigl\| y - u\Bigl(\sum_{j \le n} x_j\Bigr) \Bigr\| < r\,2^{-n} .$$

因为 $\sum \|x_n\| < 1$ 而 $E$ **完备**，级数 $x := \sum_{n} x_n$ 收敛，且 $\|x\| < 1$。又 $u$ 连续，故 $u(x) = \lim_n u(\sum_{j\le n} x_j) = y$。于是 $y = u(x)$ 且 $\|x\| < 1$，即 $y \in u(B_E)$。

> 续见 notes/thm.open-mapping-banach.3.md
