# Brouwer 不动点定理（圆盘）　`thm.brouwer-fixed-point`　·　说明
根 `../`

**复分析证明（用绕数）**：反设 $f$ 没有不动点，即 $f(z) \ne z$ 处处成立。对每个 $z \in \overline{\mathbb{D}}$，从 $f(z)$ 出发沿射线经过 $z$ 打到边界，定义

$$r(z) := f(z) + t(z)\left(z - f(z)\right),\qquad t(z) \ge 1 \text{ 由 } |r(z)| = 1 \text{ 唯一确定}.$$

解一元二次方程可得 $t$ 连续依赖 $z$，且 $z \in S^{1}$ 时 $r(z) = z$。于是 $r : \overline{\mathbb{D}} \to S^{1}$ 是**收缩**（$r|_{S^{1}} = \mathrm{id}$）。

现在看闭曲线 $\gamma(t) := e^{2\pi i t}$（$t \in [0,1]$）。一方面 $r \circ \gamma$ 的像落在 $S^{1}$ 里，而 $S^{1}$ 上的闭曲线由 $t \mapsto (r\circ\gamma)(t)/|(r\circ\gamma)(t)|$ 给出……更干脆地用绕数：$\gamma$ 绕 $0$ 的绕数是 $1$；$r \circ \gamma$ 与 $\gamma$ 在 $\mathbb{C}\setminus\{0\}$ 中同伦（$H(s,t) := r((1-s)\gamma(t) + s\, r(\gamma(t)))$……这个同伦不可用，改用下面的口径）：

> 续见 notes/thm.brouwer-fixed-point.2.md
