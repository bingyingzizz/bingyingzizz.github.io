# 单态射 / 满态射 / 同构　`def.mono`　·　说明
根 `../`

在 $\mathbf{Set}$ 里单态射恰好是单射、满态射恰好是满射（后者要用选择公理）。但一般范畴里「可消」才是定义，「一对一 / 到上」只是它在具体范畴里的表现：在环范畴里 $\mathbb{Z} \to \mathbb{Q}$ 是满态射，可它的底层映射并不是满射 —— 遗忘函子把它送出去就不再是满的了。

**逆是唯一的**：若 $g, g'$ 都是 $f$ 的逆，则 $g = g \circ 1_{Y} = g \circ (f \circ g') = (g \circ f) \circ g' = 1_{X} \circ g' = g'$ ✓。

**同构与单态射的关系**：$f$ 是同构 $\iff$ $f$ 是单态射且有**截面**。

$(\implies)$ 由 $f \circ g = 1_{Y}$、$g \circ f = 1_{X}$ 直接看出（后者说明 $f$ 是分裂单态射，从而是单态射）。

$(\Longleftarrow)$ 设 $f \circ g = 1_{Y}$。则 $f \circ (g \circ f) = (f \circ g) \circ f = 1_{Y} \circ f = f = f \circ 1_{X}$，由 $f$ 单态射得 $g \circ f = 1_{X}$，故 $f$ 是同构 ✓。

把箭头全部反向，得到对偶说法：$f$ 是同构 $\iff$ $f$ 是满态射且有**收缩**。

> 续见 notes/def.mono.2.md
