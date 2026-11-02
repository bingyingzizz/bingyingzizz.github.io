# 阿贝尔群的 Ext　`prop.ext-abelian-groups`　·　说明
根 `../`

取 $\mathbb{Z}^{(J)} \twoheadrightarrow K$ 得
$$0 \longrightarrow \mathbb{Z}^{(J)} \longrightarrow \mathbb{Z}^{(I)} \longrightarrow M \longrightarrow 0.$$
只要有一条长度 2 的消解，就可以用它算 $\operatorname{Ext}^{n}$：复形 $\operatorname{Hom}(\mathbb{Z}^{(\bullet)}, N)$ 只在 $0$、$1$ 次非零，故上同调只在 $n = 0, 1$ 次可能出现：$\operatorname{Ext}^{n}(M,N) = 0$（$n \ge 2$）✓，且 $\operatorname{Ext}^{0} = \operatorname{Hom}(M,N)$ ✓。
**2.** 用 $\mathbb{Z}/k$ 的标准消解
$$0 \longrightarrow \mathbb{Z} \xrightarrow{\ \times k\ } \mathbb{Z} \longrightarrow \mathbb{Z}/k \longrightarrow 0$$
作用 $\operatorname{Hom}_{\mathbb{Z}}(-, N)$ 得长正合列
$$0 \to \operatorname{Hom}(\mathbb{Z}/k, N) \to \operatorname{Hom}(\mathbb{Z}, N) \xrightarrow{\ (\times k)^{*}\ } \operatorname{Hom}(\mathbb{Z}, N) \to \operatorname{Ext}^{1}(\mathbb{Z}/k, N) \to \underbrace{\operatorname{Ext}^{1}(

> 续见 notes/prop.ext-abelian-groups.3.md
