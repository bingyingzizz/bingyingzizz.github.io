# 振幅判据 $\implies$ 线性与区间可加
`imp.integral-linear` · 推出 · strong 边 · 根 `../`

`thm.riemann-criterion` 可积的振幅判据 → `prop.integral-linear` 积分的线性与区间可加

故 $f + g$ 可积。
2. 值的关系 $\int (f + g) = \int f + \int g$：在同一分割上，$L(f,P) + L(g,P) \le L(f+g,P) \le U(f+g,P) \le U(f,P) + U(g,P)$，令分割变细即得。
3. 数乘同理（$\omega(cf) = |c|\omega(f)$，值的关系由 $U(cf,P) = cU(f,P)$ 当 $c \ge 0$、$c < 0$ 时互换上下的角色）。
4. **区间可加**：设 $P$ 是 $[a, b]$ 的分割，取 $c$ 为分割点，则 $P$ 分裂成 $[a, c]$ 与 $[c, b]$ 的分割，$U(f, P) = U_{[a,c]}(f) + U_{[c,b]}(f)$（$L$ 同）。

由振幅判据，一侧的振幅和可以任意小当且仅当两侧都可以，故可积性等价；

取极限得 $\int_a^b f = \int_a^c f + \int_c^b f$。

∎

> 「振幅的次可加性」是这一整包的主引擎：可积性的一切运算性质（和、数乘、乘积、区间可加）都是它的推论。
