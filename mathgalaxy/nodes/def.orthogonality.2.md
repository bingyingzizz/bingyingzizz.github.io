# 正交　`def.orthogonality`　·　续页（第 2 页）
[在星图里打开](../#n=def.orthogonality)　·　第 1 页 [nodes/def.orthogonality.md](./def.orthogonality.md)

## 陈述（续）
- $u \perp v \iff \langle u,v\rangle = 0$：**这是定义**，没有内容。
- $S \perp T$：**也是定义**（逐对正交）。
- **标准正交组** $\iff$ $\langle v_{i},v_{j}\rangle = \delta_{ij}$：**仍是定义**，但要注意这里包含 $i = j$ 的情形，即每个向量**单位长**；只说“两两正交”不够（那是**正交组**，长度可不为 $1$）。
- **标准正交基** $\iff$ 基 $+$ 标准正交组：**这一条要用一个非平凡事实** —— 标准正交组**自动线性无关**（$\sum c_{i}v_{i} = 0$ 与 $v_{j}$ 取内积得 $c_{j} = 
0$），所以「标准正交组 + 张成」才是「基 + 标准正交」。若只要求「基」与「两两正交」，则必须额外假定没有零向量。

> 续见 [nodes/def.orthogonality.3.md](./def.orthogonality.3.md)
