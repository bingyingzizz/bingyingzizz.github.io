# Brouwer 不动点定理（圆盘）　`thm.brouwer-fixed-point`　·　说明
根 `../`

**证明（连续情形）**：反设 $f$ 处处没有不动点，即 $f(z) \ne z$ 对一切 $z \in \overline{\mathbb{D}}$。对每个 $z$ 定义

$$r(z) := z + t(z)\,(z - f(z)),$$

其中

$$a(z) := \langle z,\ z - f(z)\rangle,\qquad b(z) := |z - f(z)|^{2} > 0,$$

$$t(z) := \frac{-a(z) + \sqrt{a(z)^{2} + b(z)\,(1 - |z|^{2})}}{b(z)}.$$

**为什么 $r$ 落在 $S^{1}$ 上**：把 $|z + t(z - f(z))|^{2} = 1$ 展开成

$$b(z)\,t^{2} + 2a(z)\,t + (|z|^{2} - 1) = 0,$$

而 $t(z)$ 正是这个二次方程的非负根（$b > 0$；因为 $1 - |z|^{2} \ge 0$，根号下 $\ge a^{2}$，故根号 $\ge |a| \ge -a$，所以 $t \ge 0$）。于是 $|r(z)| = 1$。

**$r$ 连续**：$f$ 连续，$a, b$ 由内积与模算出，仍是连续函数；$b(z) \ge |z - f(z)|^{2}$ 处处 $> 0$，开方与除法都不出问题。

**$r$ 在边界上是恒等**：若 $|z| = 1$，则 $a(z) = \langle z, z - f(z)\rangle = 1 - \langle z, f(z)\rangle \ge 0$（因 $|f(z)| \le 1$），代入 $t(z)$ 得 $t(z) = 0$，于是 $r(z) = z$。

> 续见 notes/thm.brouwer-fixed-point.2.md
