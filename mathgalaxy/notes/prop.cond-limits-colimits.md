# Cond 的极限与余极限　`prop.cond-limits-colimits`　·　说明
根 `../`

**证明极限那一半。** 层范畴 $\mathrm{Cond}$ 是预层范畴 $\widehat{\mathbf{CHaus}}$ 的**反射**满子范畴，含入函子 $i$ 有左伴随（层化）。右伴随保极限，所以 $i$ 保极限：$\mathrm{Cond}$ 里的极限就是预层里的极限；而预层里的极限是**逐点**算的。∎
**余极限为什么不行。** 层化只是 $i$ 的**左**伴随，它不保余极限，所以余极限要先在预层里逐点取、再层化一次。
**一个具体的反例。** 取紧 Hausdorff 的满射 $F \twoheadrightarrow S$，例如 $S = S^{1}$、$F = S^{1}$、$z \mapsto z^{2}$。在 $\mathrm{Cond}$ 里，满射是**有效满**，所以
$$\operatorname{coeq}\bigl(F \times_{S} F \rightrightarrows F\bigr) = h_{S};$$
但**逐点**看 $T = S^{1}$：$F \times_{S} F = S^{1} \times \{\pm 1\}$，两个投影在 $\mathrm{Hom}(S^{1}, F) = \mathrm{Hom}(S^{1}, S^{1})$ 上就是 $g \mapsto g$ 与 $g \mapsto -g$，于是逐点余等化子把 $\mathrm{id}$ 与 $-\mathrm{id}$ 粘了起来，是 $\mathrm{Hom}(S^{1}, S^{1})$ 的一个**真商**；而 $h_{S}(S^{1}) = \mathrm{Hom

> 续见 notes/prop.cond-limits-colimits.2.md
