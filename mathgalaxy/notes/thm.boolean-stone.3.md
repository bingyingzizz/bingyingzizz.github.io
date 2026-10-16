# Boolean 环与 Stone 空间等价　`thm.boolean-stone`　·　说明
根 `../`

**证明（两个函子互逆）。**
- **$S\mapsto \operatorname{Clopen}(S)$ 确实是布尔环**：对称差给加法、交是乘法，$S$ 本身是单位元，每个开闭集自带补，而开闭集都是幂等元 ✓；
- **$B\mapsto \operatorname{Spec}(B)$ 是石空间**：$\operatorname{Spec}(B)\subseteq \mathbb{F}_{2}^{B}$ 是乘积空间的**闭**子集（它是「每个 $f$ 是环同态」这组等式的公共解集），$\mathbb{F}_{2}$ 有限离散故紧 Hausdorff，于是 $\operatorname{Spec}(B)$ 紧 Hausdorff；而 $\mathbb{F}_{2}^{B}$ 极不连通、闭子空间仍极不连通 $\implies$ $\operatorname{Spec}(B)$ 极不连通，特别地全不连通 ✓；
- **两个复合是恒等**：$S\mapsto \operatorname{Clopen}(S)\mapsto \operatorname{Spec}(\operatorname{Clopen}(S))$ —— 每个 $x\in S$ 给求值 $\operatorname{Clopen}(S)\to\mathbb{F}_{2}$，这是双射（Stone 空间里点由开闭集分离）；反向 $B\mapsto \operatorname{Spec}(B)\mapsto \operatorname{Clopen}(\operatorname{Spec}(B))$ —— 每个 $b\in B$ 给 $\{f : f(b) = 1\}$，它在 $\operatorname{

> 续见 notes/thm.boolean-stone.4.md
