# Newman 解析定理　`lem.newman-tauberian`　·　说明
根 `../`

先令 $T\to\infty$ 再令 $R\to\infty$，得 $g_{T}(0)\to g(0)$；而 $g_{T}(0)=\int_{0}^{T}f(t)\,\mathrm{d}t$，故 $\int_{0}^{\infty}f=g(0)$。∎

**注（核里为什么有 $1+z^{2}/R^{2}$）**：$F(0)=1$ 使留数仍是 $g(0)-g_{T}(0)$；而在 $|z|=R$ 上 $1+z^{2}/R^{2}=2z\operatorname{Re}z/R^{2}$，恰好把 $1/\operatorname{Re}z$ 这个坏因子抵消。没有它，第四步会多出 $1/\operatorname{Re}z$，无法对 $R$ 取一致估计。

**注（假设的强弱）**：证明只要求 $g$ 在**每个**闭半圆盘 $\{|z|\le R,\ \operatorname{Re}z\ge0\}$ 的某个邻域上全纯。对素数定理的 $g$，这一条由 $\zeta$ 在 $\operatorname{Re}s=1$ 无零点、再在每个固定紧集上取最大模下界得到，不需要 $\zeta$ 在固定宽度的竖条里无零点。

**注（Tauber 现象）**：若只有「$g$ 在 $\operatorname{Re}z>0$ 全纯」，结论一般不成立；真正用上的是 $f$ 的**有界性**（估计 (1)）。例如 $f(t)=\sin t$ 有界，$g(z)=1/(z^{2}+1)$ 在虚轴上有极点，假设不满足，而 $\int_{0}^{T}\sin t\,\mathrm{d}t$ 不收敛。
