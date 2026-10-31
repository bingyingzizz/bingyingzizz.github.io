# 诱导体积　`def.submanifold-volume`　·　说明
根 `../`

**为什么不能拉回体积形式**：$i^{\ast}$ 把 $M$ 的 $n$-形式拉成 $N$ 上的 $n$-形式，而 $\dim N = k < n$ 时 $k$ 维流形上没有非零的 $n$-形式 —— 所以 $i^{\ast}(\mathrm{d}V_{g}) = 0$。次数必须先降下来：要么用 $\iota_{\nu}$ 沿法向缩一次（超曲面情形），要么换诱导度量重算。这是最常卡住的一步。

**超曲面（$k = n-1$）的特例**：取单位法向 $\nu$，则

$$\mathrm{d}V_{N} = \pm\,\iota_{\nu}\,\mathrm{d}V_{g},$$

符号取决于 $\nu$ 与 $N$ 的定向是否相容。这就是 Gauss 公式与散度定理（`thm.divergence-theorem`）里「边界上的面积元」的来历：内乘（`def.interior-product`）把 $n$-形式沿法向缩成 $(n-1)$-形式。

**二维情形就是面积元**：$i : S \to \mathbb{R}^{3}$ 时 $g_{ab}$ 是曲面的第一基本形式 $E, F, G$，$\sqrt{\det} = \sqrt{EG - F^{2}}$，与 `def.area-element` 逐字相同。所以「曲面的面积」是这条的一般情形，不是另一套定义。

> 续见 notes/def.submanifold-volume.2.md
