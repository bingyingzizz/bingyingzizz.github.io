# Newman 解析定理　`lem.newman-tauberian`　·　说明
根 `../`

$$g(0)-g_{T}(0)=\frac{1}{2\pi i}\oint_{C}\bigl(g(z)-g_{T}(z)\bigr)F(z)\,\frac{\mathrm{d}z}{z}.\tag{2}$$

**第二步（拆成三段）.** 令 $C_{+}=C\cap\{\operatorname{Re}z>0\}$、$C_{-}=C\cap\{\operatorname{Re}z\le0\}$。在 $C_{+}$ 上 $g-g_{T}=\int_{T}^{\infty}fe^{-zt}\,\mathrm{d}t$；在 $C_{-}$ 上 $g-g_{T}=g-\int_{0}^{T}fe^{-zt}\,\mathrm{d}t$。于是 (2) 的右端等于

$$I_{1}+I_{2}+I_{3},\quad I_{1}=\frac{1}{2\pi i}\int_{C_{+}}\!\!\int_{T}^{\infty}fe^{-tz}F\,\mathrm{d}t\,\frac{\mathrm{d}z}{z},\quad I_{2}=-\frac{1}{2\pi i}\int_{C_{-}}\!\!\int_{0}^{T}fe^{-tz}F\,\mathrm{d}t\,\frac{\mathrm{d}z}{z},\quad I_{3}=\frac{1}{2\pi i}\int_{C_{-}}gF\,\frac{\mathrm{d}z}{z}.$$

**第三步（$|F|$ 的初等估计）.** 对 $|z|=R$，由 $R^{2}+z^{2}=2z\operatorname{Re}z$ 得

> 续见 notes/lem.newman-tauberian.3.md
