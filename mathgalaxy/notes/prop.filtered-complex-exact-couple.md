# 过滤复形给出正合偶　`prop.filtered-complex-exact-couple`　·　说明
根 `../`

**这一条是把两条路焊在一起的螺丝。**

- **一条路**（图上已有）：直接对过滤复形定义 $Z^{p,q}_{r}$、$B^{p,q}_{r}$，验证 $E_{r+1} = H(E_{r}, d_{r})$、收敛到 $\operatorname{Gr}^{p}H^{p+q}$ —— 见 `thm.filtered-complex-spectral`。
- **另一条路**（这一条）：把长正合列的「三项正合」打包成正合偶，让正合偶的导出机制自动生成谱序列 —— 见 `thm.exact-couple-spectral`。

**两条路为什么是同一个。**

① **第一页相同**：两边都是 $E_{1}^{p,q} = H^{p+q}(\operatorname{Gr}^{p}K)$。

② **第一微分相同**：导出偶的 $d_{1} = j k$ 是

$$H^{p+q}\bigl(\operatorname{Gr}^{p}K\bigr) \xrightarrow{\ k\ } H^{p+q+1}\bigl(F^{p+1}K\bigr) \xrightarrow{\ j\ } H^{p+q+1}\bigl(\operatorname{Gr}^{p+1}K\bigr),$$

即「连接同态 + 落到关联分次」，这正是直接构造里 $\operatorname{Gr}^{p} \to \operatorname{Gr}^{p+1}$ 的那个微分，其落点 $(p+1, q)$ 与 $d_{r}$ 的规律 $(r, 1-r)$ 在 $r = 1$ 时吻合。

> 续见 notes/prop.filtered-complex-exact-couple.2.md
