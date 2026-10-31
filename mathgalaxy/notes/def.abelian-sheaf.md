# 阿贝尔层　`def.abelian-sheaf`　·　说明
根 `../`

⭐ **阿贝尔群预层就是「最粗拓扑下的层」** —— 两种说法是一套东西。

遗忘函子 $\mathbf{Ab} \to \mathbf{Set}$ 沿复合给出遗忘函子 $\widehat{\mathcal{C}}(\mathbf{Ab}) \to \widehat{\mathcal{C}}$。

两条基本事实：

- **阿贝尔层按底集合层来判**：$M$ 是阿贝尔层 $\iff$ 它的底集合预层是层。因为遗忘函子保所有极限，而层条件是一个极限图 —— 用米田引理把 $\operatorname{Hom}_{\mathbb{Z}}(N, M(-))$ 换回 $M(-)$，条件就同一条。
- **阿贝尔层 = 层范畴里的阿贝尔群对象**：$\widetilde{\mathcal{C}}(\mathbf{Ab}) \simeq \mathbf{Ab}\bigl(\widetilde{\mathcal{C}}\bigr)$。这正是「凝聚态阿贝尔群 = 凝聚态集范畴里的阿贝尔群」那条定义的一般版本。
