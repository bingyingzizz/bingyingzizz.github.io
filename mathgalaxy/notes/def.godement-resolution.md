# Godement 消解　`def.godement-resolution`　·　说明
根 `../`

**构造要点**：$\mathcal{C}^{0}(\mathcal{F})(U)=\prod_{x\in U}\mathcal{F}_{x}$ 把截面逐点记录为茎的元素；限制映射是投影，故任意开集上的截面都能延拓（松弛）。$\mathcal{C}^{q}$ 取 $q$ 次「茎积」的交替版本，微分是 Čech 型交替和。

**用途（条件于松弛层无环）**：若松弛层无环（Godement 定理，本图未证），则 Godement 消解计算层上同调：$H^{q}(X,\mathcal{F})\cong H^{q}(\Gamma(X,\mathcal{C}^{\bullet}(\mathcal{F})))$。这是「任意层都有规范无环消解」的标准构造，不需要内射层。

⚠ 本图有 `def.acyclic-sheaf`、`def.right-derived-functor`，但**没有**「松弛层无环」的节点与证明（`thm.soft-sheaf-acyclic` 的第 3 步正是条件于它）。此节点只定义构造。
