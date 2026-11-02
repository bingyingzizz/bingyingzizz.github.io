# 一阶扩展的分类　`thm.ext1-extensions`　·　说明
根 `../`

**证明（用一条投射预覆盖造映射）。** 取投射预覆盖 $0 \to K \to P \xrightarrow{\ p\ } M \to 0$。

由维数转移，$\operatorname{Ext}^{1}_{R}(M, N) \cong \operatorname{coker}\bigl(\operatorname{Hom}(P, N) \to \operatorname{Hom}(K, N)\bigr)$ ✓。
**① 从扩张到类。** 给定扩张 $0 \to N \to E \to M \to 0$，沿 $p$ 拉回：得 $0 \to N \to E_{0} \to P \to 0$，其中 $E_{0} = \{\, (e, x) : \pi(e) = p(x) \,\}$。

$P$ 投射，故这条列**分裂**，取分裂 $\sigma : P \to E_{0}$；

复合 $K \hookrightarrow P \xrightarrow{\sigma} E_{0} \to N$ 给出 $\theta \in \operatorname{Hom}(K, N)$ ✓。

> 续见 notes/thm.ext1-extensions.2.md
