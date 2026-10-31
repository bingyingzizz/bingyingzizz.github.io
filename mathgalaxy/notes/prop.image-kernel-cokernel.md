# 像就是余核的核　`prop.image-kernel-cokernel`　·　说明
根 `../`

**证明（两条基本事实：阿贝尔范畴里每个单态射都是它余核的核、每个满态射都是它核的余核）。**
记 $m := \ker\bigl(N \to \operatorname{coker} f\bigr)$，它按定义是单态射 ✓。
**（一）$f$ 穿过 $m$。** 因为 $(\operatorname{coker} f) \circ f = 0$ ✓，而 $m$ 正是这个映射的核，所以 $f$ 唯一地分解为 $f = m \circ e$ ✓。
**（二）$m$ 最小。** 设 $f = m' \circ e'$ 是任意分解且 $m'$ 是单态射。因为 $(\operatorname{coker} m') \circ m' = 0$ ✓，得 $(\operatorname{coker} m') \circ f = 0$，于是由 $\operatorname{coker} f$ 的泛性质，$\operatorname{coker} m'$ 穿过 $\operatorname{coker} f$ ✓，特别地
$$(\operatorname{coker} m') \circ m = 0.$$
再用「单态射 $m'$ 是它自己余核的核」：$m' = \ker(\operatorname{coker} m')$ ✓，于是 $m$ 唯一地穿过 $m'$ —— 即 $m$ 是「$f$ 能穿过的各种单态射」里最小的那个 ✓。
（一）（二）合起来，$m$ 连同分解 $f = m \circ e$ 正是**像**的泛性质 ✓，所以 $\operatorname{im} f = \ker(\operatorn

> 续见 notes/prop.image-kernel-cokernel.2.md
