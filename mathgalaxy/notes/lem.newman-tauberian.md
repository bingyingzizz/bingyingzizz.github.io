# Newman 解析定理　`lem.newman-tauberian`　·　说明
根 `../`

**证明在本节点的入边**（Cauchy 积分公式 + 留数 + Cauchy–Goursat 的围道估计），本注只留两条用法说明。

**注 1（核里为什么有 $1+z^{2}/R^{2}$）**：$F(0)=1$ 使 $z=0$ 处的留数仍是 $g(0)-g_{T}(0)$；而在 $|z|=R$ 上 $1+z^{2}/R^{2}=2z\operatorname{Re}z/R^{2}$，恰好抵消 $1/\operatorname{Re}z$ 这个坏因子，使右半平面与左半圆上的估计都能对 $R$ 一致。

**注 2（假设的强弱与 Tauber 现象）**：证明只要求 $g$ 在**每个**闭半圆盘 $\{|z|\le R,\ \operatorname{Re}z\ge0\}$ 的某个邻域上全纯；对素数定理的 $g$，这由 $\zeta$ 在 $\operatorname{Re}s=1$ 无零点加紧性得到。若只有「$g$ 在 $\operatorname{Re}z>0$ 全纯」，结论一般不成立：$f(t)=\sin t$ 有界，$g(z)=1/(z^{2}+1)$ 在虚轴有极点，而 $\int_{0}^{T}\sin t\,\mathrm{d}t$ 不收敛。
