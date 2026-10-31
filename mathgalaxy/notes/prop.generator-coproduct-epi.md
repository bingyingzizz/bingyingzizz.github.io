# 生成元的余积刻画　`prop.generator-coproduct-epi`　·　说明
根 `../`

**证明。**
**$(\Longrightarrow)$** 取 $I := \operatorname{Hom}_{\mathcal{C}}(G, M)$，令 $\coprod_I G \to M$ 的各分量按对应态射来 ✓。若它不是满射，则 $M \to \operatorname{coker}$ 非零，由生成性存在 $g : G \to M$ 使这个复合非零 —— 可是 $g$ 本来就是 $I$ 中的一个分量，它的像落在 $\operatorname{im}$ 里，矛盾 ✓。
**$(\Longleftarrow)$** 给 $f \ne g : M \to N$，则 $h := f - g \ne 0$。取满射 $G^{(I)} \twoheadrightarrow M$，于是 $h \circ (\text{满射}) \ne 0$，特别地某个分量 $G \to M$ 上非零 ✓，即 $\operatorname{Hom}(G, h) \ne 0$ —— 所以 $\operatorname{Hom}(G, -)$ 忠实，$G$ 是生成元 ✓。∎

⚠️ 这条判据其实**只用到余积**（AB3），滤过余极限没有出场（AB5 的那部分条件用不上）。
