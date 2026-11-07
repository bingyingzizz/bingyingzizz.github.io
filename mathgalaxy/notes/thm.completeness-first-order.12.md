# 完备性定理　`thm.completeness-first-order`　·　说明
根 `../`

**备注**：证明只额外用了标准 Hilbert 公理模式（它们不是本图的节点，但每条都能逐字核验）。上面全程对**任意语言**成立（有限语言取 $\kappa=\aleph_0$）：取 $\kappa=\max(|\mathcal{L}|,\aleph_0)$，添 $\kappa$ 个新常元、按序数超限递归造极大一致集，所以陈述不受基数的可数性限制。选择公理在这里只用在一处：把 $\mathcal{L}$ 良序、按序数枚举语句；新常元取显式索引 $\{c_\beta:\beta<\kappa\}$，每步取最小未用 $\beta$，不需要 AC。推论：紧致性定理（每个有限子集有模型 $\implies$ 整个理论有模型）由 $\Gamma\vDash\varphi\implies\Gamma\vdash\varphi$ 的有限性立刻得到。⚠ 完备性**不**与 Gödel 不完备性定理矛盾：后者谈的是像 PA/ZFC 这样足够强的**理论**里存在不可判定的句子，不是逻辑本身的完备性。
