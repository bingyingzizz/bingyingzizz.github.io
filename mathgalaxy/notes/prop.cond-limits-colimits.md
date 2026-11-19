# Cond 的极限与余极限　`prop.cond-limits-colimits`　·　说明
根 `../`

**余极限为什么不行。** 含入函子 $i:\mathrm{Cond}\hookrightarrow\widehat{\mathrm{CHaus}}$ 是右伴随，不保余极限；层化 $a$ 是它的左伴随，只负责把预层余极限补成层，所以余极限要先在预层里逐点取、再层化一次。
**一个具体的反例。** 取紧 Hausdorff 的满射 $F \twoheadrightarrow S$，例如 $S = S^{1}$、$F = S^{1}$、$z \mapsto z^{2}$。在 $\mathrm{Cond}$ 里，满射是**有效满**，所以
$$\operatorname{coeq}\bigl(F \times_{S} F \rightrightarrows F\bigr) = h_{S};$$
但**逐点**看 $T = S^{1}$：$F \times_{S} F = S^{1} \times \{\pm 1\}$，两个投影在 $\mathrm{Hom}(S^{1}, F) = \mathrm{Hom}(S^{1}, S^{1})$ 上就是 $g \mapsto g$ 与 $g \mapsto -g$，于是逐点余等化子把 $\mathrm{id}$ 与 $-\mathrm{id}$ 粘了起来，是 $\mathrm{Hom}(S^{1}, S^{1})$ 的一个**真商**；

而 $h_{S}(S^{1}) = \mathrm{Hom}(S^{1}, S^{1})$ 里这两个元素并不相等。

两者不同，故余极限不是逐点算的。

> 续见 notes/prop.cond-limits-colimits.2.md
