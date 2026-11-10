# Stieltjes 分部求和
`imp.pnt-lemma3` · 推出 · strong 边 · 根 `../`

`def.prime-counting` 素数计数函数 → `lem.abel-theta-pi` θ 与 π 的 Abel 变换

对任意 $C^{1}$ 函数 $f$，Stieltjes 分部求和给



$$\sum_{p\le x}f(p)=\pi(x)f(x)-\int_{2}^{x}\pi(t)\,\mathrm{d}f(t).$$



取 $f(t)=\log t$：$\mathrm{d}f=\mathrm{d}t/t$，左边是 $\theta(x)$，得第一式。取 $f(t)=1/\log t$：$\mathrm{d}f=-\mathrm{d}t/(t\log^{2}t)$，左边是 $\pi(x)$，得 $\pi(x)=\frac{\theta(x)}{\log x}+\int_{2}^{x}\frac{\theta(t)}{t\log^{2}t}\,\mathrm{d}t$。∎
