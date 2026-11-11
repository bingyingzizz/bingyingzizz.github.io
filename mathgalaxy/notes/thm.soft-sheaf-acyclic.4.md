# 软层无环（Godement）　`thm.soft-sheaf-acyclic`　·　说明
根 `../`

**第 3 步（条件于松弛层无环）：维数转移。** Godement 消解 $0 \to \mathcal{F} \to \mathcal{C}^{0} \to \mathcal{C}^{1} \to \cdots$ 的每一项松弛，由第 0 步软。令 $\mathcal{Z}^{1} := \operatorname{im}(\mathcal{C}^{0} \to \mathcal{C}^{1})$。对 $0 \to \mathcal{F} \to \mathcal{C}^{0} \to \mathcal{Z}^{1} \to 0$ 用第 1、2 步：$\Gamma(\mathcal{C}^{0}) \to \Gamma(\mathcal{Z}^{1})$ 满，故 $H^{1}(X,\mathcal{F}) = 0$ —— **这一步不需要无环性**。但 $n \ge 2$ 时，长正合列只给出 $\cdots \to H^{n-1}(\mathcal{Z}^{1}) \to H^{n}(\mathcal{F}) \to H^{n}(\mathcal{C}^{0}) \to \cdots$；要读出 $H^{n}(X,\mathcal{F}) \cong H^{n-1}(X,\mathcal{Z}^{1})$，必须先有 $H^{n}(X,\mathcal{C}^{0}) = H^{n}(X,\mathcal{C}^{1}) = \cdots = 0$，即**松弛层无环**（Godement 定理）。本图没有这条引理的节点与证明，所以这一步只是条件性的：第 0–2 步之外的第 3 步**未闭合**，故本节点保持 `status: 'skeleton'`、不勾证明结束符。

> 续见 notes/thm.soft-sheaf-acyclic.5.md
