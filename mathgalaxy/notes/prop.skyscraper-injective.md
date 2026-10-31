# 天际线层是内射层　`prop.skyscraper-injective`　·　说明
根 `../`

**证明（把内射性搬到茎上）。** 关键是一个自然同构：对任意层 $\mathcal{F}$，

$$\operatorname{Hom}_{\mathbf{Ab}(X)}\bigl(\mathcal{F},\ i_{x,*}A\bigr) \;\cong\; \operatorname{Hom}_{\mathbf{Ab}}\bigl(\mathcal{F}_{x},\ A\bigr),$$

它来自伴随 $i_{x}^{-1} \dashv i_{x,*}$ 与「$i_{x}^{-1}\mathcal{F} = \mathcal{F}_{x}$」。

内射性要检验的是：对每个层的单射 $\mathcal{G} \rightarrowtail \mathcal{H}$，$\operatorname{Hom}(\mathcal{H}, i_{x,*}A) \to \operatorname{Hom}(\mathcal{G}, i_{x,*}A)$ 满。用上面的同构，这等价于

$$\operatorname{Hom}_{\mathbf{Ab}}(\mathcal{H}_{x},\ A) \longrightarrow \operatorname{Hom}_{\mathbf{Ab}}(\mathcal{G}_{x},\ A)$$

满。而取茎是滤过余极限、**正合**，故 $\mathcal{G}_{x} \rightarrowtail \mathcal{H}_{x}$ 是阿贝尔群的单射；$A$ 内射于是上式满。∎

> 续见 notes/prop.skyscraper-injective.2.md
