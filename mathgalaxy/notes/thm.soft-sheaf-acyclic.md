# 软层无环（Godement）　`thm.soft-sheaf-acyclic`　·　说明
根 `../`

⚠️ **本节点标 `status: 'skeleton'`**：第 0–2 步完整；第 3 步条件于「松弛层无环」（Godement 定理），本图没有这条引理的节点与证明，故整条链未闭合，不勾证明结束符。

**第 0 步：松弛层是软层。** 设 $\mathcal{A}$ 松弛，$A \subseteq X$ 闭，$s \in \Gamma(A,\mathcal{A})$。按 $\Gamma(A,\mathcal{A}) = \varinjlim_{A \subseteq U} \Gamma(U,\mathcal{A})$ 取开邻域 $U \supseteq A$ 与代表元 $s_{U} \in \Gamma(U,\mathcal{A})$。松弛性把 $s_{U}$ 延拓为 $\tilde{s} \in \Gamma(X,\mathcal{A})$，则 $\tilde{s}|_{A} = s$。故 $\mathcal{A}$ 软。

**第 1 步（提升引理）。** 设 $0 \to \mathcal{F} \to \mathcal{G} \to \mathcal{H} \to 0$ 是阿贝尔群层的短正合列，$\mathcal{F}$、$\mathcal{G}$ 软，$X$ 仿紧 Hausdorff。则 $\Gamma(X,\mathcal{G}) \to \Gamma(X,\mathcal{H})$ 满。

> 续见 notes/thm.soft-sheaf-acyclic.2.md
