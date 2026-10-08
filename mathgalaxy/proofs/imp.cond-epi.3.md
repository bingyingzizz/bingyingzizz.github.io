# 满态射在自由空间上逐点检验
`imp.cond-epi` · 推出 · strong 边 · 根 `../`

`def.sheaf` 层 + `prop.cond-projectives` Cond 有足够多投射对象 + `def.free-presentation` 自由表示 → `prop.cond-epi` 凝聚态集满态射的判据

现在取 $F \in \mathbf{FCHaus}$ 与 $y \in Y(F)$。由局部满，存在 $F$ 的覆盖，在其每一块 $F_{i}$ 上有 $x_{i} \in X(F_{i})$ 使 $p(x_{i}) = y|_{F_{i}}$。$\mathbf{FCHaus}$ 上的覆盖由**有限不交并**给出，而 $F$ 是自由的、余积在它上面就是无交并，所以可以直接把有限块上的 $x_{i}$ 拼起来（这正是「保有限积」那一条）：

$$x := (x_{i})_{i} \in \prod_{i} X(F_{i}) \;\cong\; X\Bigl(\coprod_{i} F_{i}\Bigr) \;=\; X(F)$$

并且 $p(x) = y$。所以 $X(F) \to Y(F)$ 是满射。∎

> 「满 = 局部满 = 局部可提升」是层论里的通用逻辑；而 $\mathbf{FCHaus}$ 上的覆盖是**有限不交并**，所以局部终于能拼成整体 —— 这就是为什么探针只需要自由对象。
