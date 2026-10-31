# 一阶扩展的分类　`thm.ext1-extensions`　·　说明
根 `../`

**证明（用一条投射预覆盖造映射）。** 取投射预覆盖 $0 \to K \to P \xrightarrow{\ p\ } M \to 0$。由维数转移，$\operatorname{Ext}^{1}_{R}(M, N) \cong \operatorname{coker}\bigl(\operatorname{Hom}(P, N) \to \operatorname{Hom}(K, N)\bigr)$ ✓。
**① 从扩张到类。** 给定扩张 $0 \to N \to E \to M \to 0$，沿 $p$ 拉回：得 $0 \to N \to E_{0} \to P \to 0$，其中 $E_{0} = \{\, (e, x) : \pi(e) = p(x) \,\}$。$P$ 投射，故这条列**分裂**，取分裂 $\sigma : P \to E_{0}$；复合 $K \hookrightarrow P \xrightarrow{\sigma} E_{0} \to N$ 给出 $\theta \in \operatorname{Hom}(K, N)$ ✓。分裂的选取差一个 $\operatorname{Hom}(P, N)$ 的元素，所以 $\theta$ 的**类**在余核里是良定义的 ✓。
**② 从类到扩张。** 给定 $\theta : K \to N$，作推出（pushout）：$E := (P \oplus N)/\{\, (k, -\theta k) : k \in K \,\}$，得交换图与短正合列 $0 \to N \to E \to M \to 0$ ✓。
**③ 两个方向互逆。** 由构造，①② 逐条对消（拉回后再推出同构于原扩张；反过来 $\theta$ 的类被还原）✓。这

> 续见 notes/thm.ext1-extensions.2.md
