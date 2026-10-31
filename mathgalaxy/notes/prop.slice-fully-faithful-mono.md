# 单态射的切片刻画　`prop.slice-fully-faithful-mono`　·　说明
根 `../`

**证明。** 该函子在 Hom 集上就是包含映射（两边都是 $\operatorname{Hom}(A, B)$ 的子集），所以**忠实自动成立** ✓，只需看满。

**$(\Longrightarrow)$** 给 $v : A \to B$ 与 $b \circ v = f \circ a$：由 $f$ 单得 $b \circ v = a$ ✓，即 $v$ 是 $/Y$ 里的态射 ✓。

**$(\Longleftarrow)$** 若 $f g = f h$，取 $a = g$、$b = 1_{Y}$：在 $/X$ 里 $h$ 与 $g$ 都是同一对对象之间的态射，由忠实得 $g = h$ ✓。∎
