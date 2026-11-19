# imp.linf-properties
`imp.linf-properties` · 推出 · strong 边 · 根 `../`

`def.essential-sup` 本性上界与 L^∞ + `def.integrable` 可积 / L¹ + `def.simple-function` 简单函数 + `def.uniform-convergence` 一致收敛 → `thm.linf-properties` L^∞ 的性质

\|g\|_{\infty}$ ✓。
**(c)** $\|f_{n}-f\|_{\infty} \to 0$ $\iff$ 存在**零集** $N$ 使 $f_{n} \to f$ 在 $N^{c}$ 上**一致**：
- $(\implies)$ 取 $N := \bigcup_{n}\{|f_{n}-f| > \|f_{n}-f\|_{\infty}\}$，可数并零集 ✓；
- $(\Longleftarrow)$ $\|f_{n}-f\|_{\infty} \le \sup_{N^{c}}|f_{n}-f| \to 0$ ✓。
**(d)(e)** $L^{\infty}$ 里简单函数稠密：把 $f$ 按值域分层截断即得一致逼近 ✓。

> 续见 proofs/imp.linf-properties.4.md
