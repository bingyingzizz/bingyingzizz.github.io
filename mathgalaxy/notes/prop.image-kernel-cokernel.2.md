# 像就是余核的核　`prop.image-kernel-cokernel`　·　说明
根 `../`

因为 $(\operatorname{coker} m') \circ m' = 0$ ✓，得 $(\operatorname{coker} m') \circ f = 0$，于是由 $\operatorname{coker} f$ 的泛性质，$\operatorname{coker} m'$ 穿过 $\operatorname{coker} f$ ✓，特别地
$$(\operatorname{coker} m') \circ m = 0.$$
再用「单态射 $m'$ 是它自己余核的核」：$m' = \ker(\operatorname{coker} m')$ ✓，于是 $m$ 唯一地穿过 $m'$ —— 即 $m$ 是「$f$ 能穿过的各种单态射」里最小的那个 ✓。
（一）（二）合起来，$m$ 连同分解 $f = m \circ e$ 正是**像**的泛性质 ✓，所以 $\operatorname{im} f = \ker(\operatorname{coker} f)$ ✓。
对偶地把箭头反过来（在 $\mathcal{C}^{\mathrm{op}}$ 里做同一件事）即得余像那条 ✓。
**（三）严格性。** 由 (一) 的分解 $f = m \circ e$ 与它的对偶分解，$\operatorname{coim} f \to \operatorname{im} f$ 两边都是同一个中间对象，于是它是同构 ✓。∎

> 续见 notes/prop.image-kernel-cokernel.3.md
