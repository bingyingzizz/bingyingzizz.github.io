# Jensen 公式　`prop.jensen`　·　说明
根 `../`

**证明**：先对**没有零点**的情形做：令 $g = f$，用 $\log|g|$ 是调和的（`def.harmonic`），调和函数的均值性质（`thm.harmonic-mean-value`）给出 $\log|g(0)| = $ 边界平均。

有零点时，把每个零点「除掉」：令

$$B(z) := \prod_{j=1}^{n} \frac{R(z - z_{j})}{R^{2} - \bar z_{j} z},$$

这是把 $z_{j}$ 送到 $0$ 的 Blaschke 因子，在 $|z| = R$ 上模长恰为 $1$。于是 $g := f / B$ 在 $|z| \le R$ 上无零点，对它用无零点情形，再逐项算$\log|B(0)| = \sum \log(|z_{j}|/R)$ 即得。∎

⭐ **它是「增长 $\leftrightarrow$ 零点」的桥**：右端被 $\log M(R)$ 控制，于是

$$n(R)\,\log 2 \le \log M(2R) - \log|f(0)|$$

把「$R$ 内有多少零点」压在了「$2R$ 上的最大模」之下 —— 这是 Weierstrass 乘积与 Hadamard 分解的全部动力来源。

⚠️ 要求 $f(0) \ne 0$。$f(0) = 0$ 时先除掉 $z^{m}$ 再用，公式右边多出 $m\log R$ 那一项。
