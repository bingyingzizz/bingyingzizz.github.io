# Newman 解析定理　`lem.newman-tauberian`　·　说明
根 `../`

**证明.** 记 $B=\sup_{t\ge0}|f(t)|$。对 $T>0$ 令 $g_{T}(z)=\int_{0}^{T}f(t)e^{-zt}\,\mathrm{d}t$；$g_{T}$ 是整函数，且对 $\operatorname{Re}z>0$ 有

$$|g(z)-g_{T}(z)|=\left|\int_{T}^{\infty}f(t)e^{-zt}\,\mathrm{d}t\right|\le B\,\frac{e^{-T\operatorname{Re}z}}{\operatorname{Re}z}.\tag{1}$$

**第一步（围道与核）.** 固定 $R>0$。由假设，$g$ 在闭半平面 $\{\operatorname{Re}z\ge0\}$ 的一个开邻域上全纯；紧集 $\{|z|\le R,\ \operatorname{Re}z\ge0\}$ 的每个点都有正距离到该邻域的补集，故存在 $\delta=\delta(R)>0$，使 $g$ 在

$$D=\{z:\ |z|\le R,\ \operatorname{Re}z\ge-\delta\}$$

上全纯（取 $\delta$ 小于紧集到补集的距离）。记 $C=\partial D$（正向）。函数

$$F(z)=e^{zT}\left(1+\frac{z^{2}}{R^{2}}\right)$$

是整函数，且 $F(0)=1$。$(g-g_{T})F/z$ 在 $D$ 内除 $z=0$ 外全纯，$z=0$ 是单极点、留数为 $(g-g_{T})(0)F(0)=g(0)-g_{T}(0)$。由 Cauchy 积分公式，

> 续见 notes/lem.newman-tauberian.2.md
