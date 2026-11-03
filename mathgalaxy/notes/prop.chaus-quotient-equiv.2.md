# 紧 Hausdorff 上商映射的四种说法　`prop.chaus-quotient-equiv`　·　说明
根 `../`

- (1) $\iff$ (4)：在**任意**拓扑空间里「商映射 + 满」就是这样定义的（商的万有性质），**不需要紧性**。注意 (1) 说的是「$T$ 上的开集 $\iff$ 原像是开集」，而 $\pi$ 连续已给出一个方向，所以 (1) 的实质是「$\pi$ 把饱和开集送到开集」。
- (3) $\implies$ (4)：**紧 Hausdorff 时满态射就是满射**。这一条要**紧性**：$S$ 紧 $\implies$ $\pi(S)$ 紧 $\implies$ 在 Hausdorff 的 $T$ 里闭；若 $\pi$ 不满，则 $T \setminus \pi(S)$ 是非空开集，于是存在从 $T$ 到两点 Sierpiński 型空间的映射把它分出去，与「$\pi$ 是满态射」（任意两个平行态射若在 $\pi$ 后相等则相等）矛盾。**在一般拓扑空间里满态射不满**是常态（例如 $\mathbb{Q} \to \mathbb{R}$ 的包含）。
- (2) $\iff$ (3)：**这一步是「正则满态射」在紧 Hausdorff 空间范畴 $\mathbf{CHaus}$ 里的特殊性** —— $\mathbf{CHaus}$ 是正规范畴（regular category），其中「满态射 = 正则满态射 = 满射」。换成一般 $\mathbf{Top

> 续见 notes/prop.chaus-quotient-equiv.3.md
