# 最大模原理　`thm.max-modulus`　·　说明
根 `../`

⭐ 证明走**平均值公式**：Cauchy 积分公式在圆心取 $\zeta = z + re^{i\theta}$，得

$$f(z) = \frac{1}{2\pi}\int_0^{2\pi} f(z + re^{i\theta})\,\mathrm{d}\theta$$

（只要 $\overline{D(z, r)} \subset \Omega$）。若 $|f|$ 在**内部**某点 $z_0$ 取到最大值 $M$，则 $M = |f(z_0)| \le \frac{1}{2\pi}\int_0^{2\pi} |f(z_0 + re^{i\theta})|\,\mathrm{d}\theta \le M$，两端相等迫使圆上 $|f| \equiv M$。

⭐ 再由连通性：集合 $\{ z : |f(z)| = M \}$ 既开（每个点周围都有整圆）又闭（$|f|$ 连续），故是全体 $\Omega$；$|f|$ 为常数加上 $f$ 全纯，得 $f$ 为常数。

⭐ 有界区域的推论：若 $\Omega$ 有界、$f$ 在 $\overline{\Omega}$ 上连续、在 $\Omega$ 内全纯，则 $\|f\|_{\overline{\Omega}} = \|f\|_{\partial\Omega}$ —— 最大值在边界取到。这是「用边界值控制内部」的最强形式。

⚠ 对 $|f|$ 的**最小值**没有对应结论：$f(z) = z$ 在单位圆盘上最小值在 $0$（内部）。正确的最小模原理是：$f$ 全纯且**无零点**时，对 $1/f$ 用最大模原理。
