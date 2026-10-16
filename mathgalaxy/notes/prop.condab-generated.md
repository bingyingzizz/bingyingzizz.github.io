# CondAb 由有限表现投射对象生成　`prop.condab-generated`　·　说明
根 `../`

**证明。**
- **生成**：$\mathrm{Cond}$ 由 $\{h_{F}\}$（$F$ 自由紧 Hausdorff）生成；而一般地「若 $\{X_{i}\}$ 生成 $\mathcal{C}$，则 $\{\mathbb{Z}\cdot X_{i}\}$ 生成 $\mathrm{Ab}(\mathcal{C})$」（用自由阿贝尔群对象的泛性质：两个态射若在所有 $\mathbb{Z}\cdot X_{i}$ 上相同则相同）。于是 $\{\mathbb{Z}\cdot F\}$ 生成 $\mathrm{CondAb}$ ✓；
- 而每个 $\mathbb{Z}\cdot F$ 由**上一条**是有限表现的投射对象 ✓；
- **足够多投射对象**：任给 $M$，由「生成」存在满态射 $\bigoplus_{i} \mathbb{Z}\cdot F_{i} \twoheadrightarrow M$，而投射对象的**余积**仍是投射对象 ✓ —— 所以每个 $M$ 都是某个投射对象的商。∎
⭐ **这条是「在 $\mathrm{CondAb}$ 里能做导出代数」的另一半依据**（另一半是「有足够多内射」，由它是 Grothendieck 范畴给出）：有足够多**投射**对象意味着**左**导出函子也能直接算。
