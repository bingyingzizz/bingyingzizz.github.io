# 阿贝尔群的 Ext　`prop.ext-abelian-groups`　·　说明
根 `../`

**证明。**
**1.** 每个阿贝尔群都有**长度 2 的自由消解**：取满射 $\mathbb{Z}^{(I)} \twoheadrightarrow M$（由生成元集 $I$ 给出），它的核 $K$ 是自由阿贝尔群 $\mathbb{Z}^{(I)}$ 的子群，**因而也自由**（$\mathbb{Z}$ 是主理想整环，PID 上自由模的子模仍自由 ✓）。取 $\mathbb{Z}^{(J)} \twoheadrightarrow K$ 得
$$0 \longrightarrow \mathbb{Z}^{(J)} \longrightarrow \mathbb{Z}^{(I)} \longrightarrow M \longrightarrow 0.$$
只要有一条长度 2 的消解，就可以用它算 $\operatorname{Ext}^{n}$：复形 $\operatorname{Hom}(\mathbb{Z}^{(\bullet)}, N)$ 只在 $0$、$1$ 次非零，故上同调只在 $n = 0, 1$ 次可能出现：$\operatorname{Ext}^{n}(M,N) = 0$（$n \ge 2$）✓，且 $\operatorname{Ext}^{0} = \operatorname{Hom}(M,N)$ ✓。
**2.** 用 $\mathbb{Z}/k$ 的标准消解
$$0 \longrightarrow \mathbb{Z} \xrightarrow{\ \times k\ } \mathbb{Z} \longrightarrow \mathbb{Z}/k \longrightarrow 0$$
作用 $\operatorname{Hom}_{\mathbb{Z}}(-, N)$ 得长正合列
$$0 \to \operatorname{Hom}(\mathbb{Z}/k, N) 

> 续见 notes/prop.ext-abelian-groups.2.md
