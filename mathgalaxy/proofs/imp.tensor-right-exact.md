# 左伴随保余极限 $\implies$ 张量右正合
`imp.tensor-right-exact` · 推出 · strong 边 · 根 `../`

`thm.hom-tensor-adjunction-mod` 张量与内同态的伴随 → `prop.tensor-right-exact` 张量函子右正合

由伴随 $(-) \otimes_{R} N \dashv \operatorname{Hom}_{R}(N, -)$，左伴随保**所有**余极限。

而余核是两项图的余极限：$\operatorname{coker}(f) = \mathrm{colim}\bigl(M_{1} \xrightarrow{f} M\bigr)$。故 $(-) \otimes N$ 保余核 ✓。

对一个加法函子，「保余核」与「把短正合列送成 $M_{1} \otimes N \to M \otimes N \to M_{2} \otimes N \to 0$ 正合」是同一句话：$g$ 满 $\iff$ $\operatorname{coker} g = 0$ $\iff$ $\operatorname{coker}(g \otimes 1) = 0$ $\iff$ $g \otimes 1$ 满；$\operatorname{im}(f \otimes 1) = \ker(g \otimes 1)$ 由保余核直接给出 ✓。

> 续见 proofs/imp.tensor-right-exact.2.md
