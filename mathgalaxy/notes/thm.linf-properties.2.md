# L^∞ 的性质　`thm.linf-properties`　·　说明
根 `../`

*一致**：
- $(\implies)$ 取 $N := \bigcup_{n}\{|f_{n}-f| > \|f_{n}-f\|_{\infty}\}$，可数并零集 ✓；
- $(\Longleftarrow)$ $\|f_{n}-f\|_{\infty} \le \sup_{N^{c}}|f_{n}-f| \to 0$ ✓。
**(d)(e)** $L^{\infty}$ 里简单函数稠密：把 $f$ 按值域分层截断即得一致逼近 ✓。但**紧支**简单函数一般不稠密：取 $f \equiv 1$（$X$ 非紧），任何紧支 $\varphi$ 都满足 $\|f-\varphi\|_{\infty} \ge 1$ ✓ —— 因为 $L^{\infty}$ 只看**逐点大小**、不看集合的测度。∎

> 续见 notes/thm.linf-properties.3.md
