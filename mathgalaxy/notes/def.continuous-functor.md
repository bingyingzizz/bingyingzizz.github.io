# 连续函子（site 之间）　`def.continuous-functor`　·　说明
根 `../`

**读法**：$g$ 的方向是 $\mathcal{C} \to \mathcal{C}'$，但层是**反变**的，所以 $g$ 把 $\mathcal{C}'$ 上的层**拉回**到 $\mathcal{C}$ 上。这个「方向拧一下」是 site 态射的一切别扭之处。

⭐ **它等价于**：$g$ 把 $\mathcal{C}'$ 的覆盖族拉回成 $\mathcal{C}$ 的覆盖族（覆盖筛的原像还是覆盖筛）。所以「连续」= 「覆盖关系被保住了」。

**记号**：$f^{-1}$ 这个名字来自拓扑：空间之间的连续映射 $f : X \to Y$ 给出开集范畴之间的函子 $f^{-1} : \operatorname{Open}(Y) \to \operatorname{Open}(X)$（取原像），而层沿它拉回。

📌 下一步：再加一条「$f^{-1}$ 是左正合的」，就得到 **site 的态射**（Definition 3.4.5）。
